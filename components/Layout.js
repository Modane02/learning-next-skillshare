import Image from "next/image";
import Hello from "./Hello";

const Layout = ({children}) => {
    return ( 
        <div className="container">
            {/*
                Se for usar uma imagem interna, só por na pasta public, caso contrário, tem que indicá-la
                <Image src="/image.png" width={600} height={400}/>
            */}
            <Image src="https://images.nightcafe.studio/jobs/3LjM8JZScS2LewSQGTwV/3LjM8JZScS2LewSQGTwV.jpg?tr=w-640,c-at_max" width={600} height={400} placeholder="blur" blurDataURL="https://cdna.artstation.com/p/assets/images/images/017/337/304/large/gabriel-justus-jojo-poster.jpg?155554" />
            <Hello />
            {children}
        </div>
     );
}
 
export default Layout;