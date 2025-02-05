export default function AuthLayout({children} : { children : React.ReactNode}) {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}


function Header() {
    return (
        <div className="text-center pt-5 text-2xl text-red-600">
            Header
        </div>
    )
}

function Footer() {
    return (
        <div className="pl-2 pr-2 text-center">
            <p>If we do not want to use auth in the url like (http://localhost:3000/auth/signin) then we can rename the auth folder as (auth)</p>
        </div>
    )
}