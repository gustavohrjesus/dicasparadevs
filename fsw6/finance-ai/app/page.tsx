// import { Button } from "./_components/ui/button";
import { redirect } from '@/node_modules/next/navigation'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

const Home = async () => {
  const { userId } = await auth()
  if( !userId ){
    redirect('/login')
  }
  return (
    <div className="h-full flex items-center justify-center">
      <UserButton showName />

    </div>
  );
}

export default Home