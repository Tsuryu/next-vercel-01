import Link from 'next/link'

import { MainLayout } from '@/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <h1>
      Ir a <Link href="/">Home</Link>
      </h1>
      
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/contact.tsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
