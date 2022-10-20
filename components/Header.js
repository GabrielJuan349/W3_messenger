import {useMoralis} from "react-moralis";
import Image from "next/image"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const {user} = useMoralis()
    return (
        <div>
            <div className="text-pink-500">
                <div className="relative h-24 w-24 mx-auto lg: inline-grid">
                    <Image layout="fill" objectFit="cover"
                           className="rounded-full"
                           src="https://links.papareact.com/3pi"/>
                </div>
                <div>
                    <div className="relative h-48 w-48 mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress/>
                    </div>
                    <h1 className="text-3xl">Welcome to te Gjred Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    <ChangeUsername />
                </div>
            </div>

        </div>
    )
}

export default Header