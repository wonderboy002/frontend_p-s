import React from "react";
const UserContext=React.createContext();
export default UserContext;

//every context is a provider
{/* <userContext>
    <Login></Login>
    <Profile></Profile>
    <Card>
        <Data></Data>
    </Card>
</userContext> */}

//every component gets access to userContext