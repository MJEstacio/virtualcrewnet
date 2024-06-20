const TestModal = ({ onClose, item }: any) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      key={item.id}
    >
      <div>
        <div>
          <h1>{item.name}</h1>
          <h2>{item.role}</h2>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TestModal;
