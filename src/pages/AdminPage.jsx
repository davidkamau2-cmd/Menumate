import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./AdminPage.css"; // ✅ Link to your CSS file

function AdminPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [loading, setLoading] = useState(true);

  const menuCollection = collection(db, "menuItems");

  const fetchMenuItems = async () => {
    try {
      const snapshot = await getDocs(menuCollection);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;

    try {
      await addDoc(menuCollection, {
        name: newItem.name,
        price: Number(newItem.price),
      });
      setNewItem({ name: "", price: "" });
      fetchMenuItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "menuItems", id));
      setMenuItems(menuItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) =>
            setNewItem({ ...newItem, name: e.target.value })
          }
        />
        <input
          type="number"
          name="price"
          placeholder="Price (Ksh)"
          value={newItem.price}
          onChange={(e) =>
            setNewItem({ ...newItem, price: e.target.value })
          }
        />
        <button type="submit">Add Item</button>
      </form>

      {loading ? (
        <p>Loading menu...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price (Ksh)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length > 0 ? (
              menuItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No menu items added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;
