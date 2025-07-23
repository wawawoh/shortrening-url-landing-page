type ContainerProps = {
  title: string;
  text: string;
  img: string;
  order: number;
};
function Container({title,text,img, order}: ContainerProps) {
  
   const translate = `translateY(${order * 50}px)`
  return (
   
    <div style={screen.width > 1024 ? {transform:translate} : {}} className="bg-white p-4 relative z-10 mb-10 " >
      {/* as per order the more downwards its gets  */}
      <img className="bg-purple-950 p-3 rounded-full absolute translate-[-50%] left-[50%] object-contain w-20 " src={img} alt="" />
      <h4 className="font-bold text-[1.4rem] py-4 pt-[3rem]">{title}</h4>
      <p className="text-gray-500 px-2">{text}</p>
    </div>
  );
}
export default Container;
