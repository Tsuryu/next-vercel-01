import { ReactElement } from 'react';

import Link from 'next/link'

import { DarkLayout, MainLayout } from '@/layouts';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout  = () => {
  return (
    <>
      <h1>
      Ir a <Link href="/">Home</Link>
      </h1>
      
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">src/pages/about.tsx</code>
        </p>
      </div>
    </>
  )
}

About.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
}

export default About
