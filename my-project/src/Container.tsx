function Container({title,text,img}) {
  return (
    <div className="bg-white p-4 relative z-10">
      <img className="bg-purple-950 p-3 rounded-full absolute translate-[-50%] left-[50%] object-contain " src={img} alt="" />
      <h4 className="font-bold py-4 pt-[3em]">{title}</h4>
      <p className="text-gray-500 px-2">{text}</p>
    </div>
  );
}
export default Container;
