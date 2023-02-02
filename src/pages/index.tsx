import Link from 'next/link'

import { MainLayout } from '@/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>
        Ir a <Link href="/about">About</Link>
      </h1>
      
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/index.tsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
