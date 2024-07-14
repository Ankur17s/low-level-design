const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black mb-2">
      <div
        className="p-2 bg-slate-300 flex justify-between cursor-pointer"
        onClick={setIsOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? "⬆️" : "⬇️"} </span>
      </div>
      {isOpen && <div className="p-2">{body}</div>}
    </div>
  );
};

export default AccordianItem;
