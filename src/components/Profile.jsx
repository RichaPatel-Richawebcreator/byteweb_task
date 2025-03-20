import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export default function Profile() {
  const [displayName, setDisplayName] = useState(
    auth.currentUser?.displayName || ""
  );

  const updateName = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName });
      alert("Name updated!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Update Profile</h2>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={updateName}
      >
        Update Name
      </button>
    </div>
  );
}
