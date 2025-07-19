function Container({title,text,img}) {
  return (
    <div className="bg-white p-4 relative z-10 mb-10">
      <img className="bg-purple-950 p-3 rounded-full absolute translate-[-50%] left-[50%] object-contain w-20 " src={img} alt="" />
      <h4 className="font-bold text-[1.4rem] py-4 pt-[3rem]">{title}</h4>
      <p className="text-gray-500 px-2">{text}</p>
    </div>
  );
}
export default Container;
