import React from 'react' 
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/dist/server/api-utils';

const layout = async({children}) => {
    const session = await auth.api.getSession({
            headers:await headers()
        });
    
    if(!session){
        return redirect("/sign-in");
    }


  return (
    <div className="flex h-screen overflow-hidden">
        <ChatSidebar/>
      <main className="flex-1 overflow-hidden">
        {/* header*/}
      {children}
      </main>
    </div>
  )
};


export default layout
