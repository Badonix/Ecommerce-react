const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      <h5>Hello {user?.name}</h5>
    </section>
  );
};
export default Dashboard;
