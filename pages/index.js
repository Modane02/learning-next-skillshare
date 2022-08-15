import Link from "next/link";
import Component from "../components/Components";
const index = () => {
    return (
        <div>
            <h1>Hello world!</h1>
            <Link href="/about"><a>Go to about page</a></Link>
            <Component />
        </div>
    );
}
 
export default index;