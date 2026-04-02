

function Header({ role, setRole }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Overview</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default Header;