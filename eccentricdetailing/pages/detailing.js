import BookButton from "@/components/BookNowButton";
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function Detailing() {    
    return (
        <>
        <Header/>
        

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Vehicle Detailing</h1>
      <p className="mb-5 w-auto">
        Experience exceptional vehicle detailing with unparalleled attention to detail</p>
      <BookButton/>
    </div>
  </div>
</div>
<div className="h-screen bg-blue-50 px-10">
    
        <h1 className="mb-5 text-5xl font-bold pt-2">What do we do?</h1>
        <div className="flex md:flex-row flex-col h-1/4 gap-4  justify-between">
            <div className="w-[20rem] justify-stretch items-center flex ">
            <p className="inline w-full">
            Insert description heread
            ihefihaewofhewoifuhaiuehaofiheia
            ofuheawoifuhawioeufhaewoifuhawef
        </p>
        </div>
        <div className="flex items-center ">
            <img src="https://www.topgear.com/sites/default/files/2022/10/field-adro-g8x-m3-m4-green-front-q-2.jpg" alt="" className="  h-auto md:h-[19rem] rounded-xl opacity-80"/>
        </div>
        </div>
        <div className="h-[2/3vh] flex flex-col justify-center items-center gap-4 pt-6">
        <h1 className="mb-5 text-5xl font-bold pt-2">Our packages</h1>
        <div className="flex items-center justify-center">
        
        </div>
        </div>
        
        
    

</div>
            <Footer/>
        </>
    )
}