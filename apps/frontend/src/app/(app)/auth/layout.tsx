export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import loadDynamic from 'next/dynamic';
import { LogoTextComponent } from '@gitroom/frontend/components/ui/logo-text.component';
import { MantineWrapper } from '@gitroom/react/helpers/mantine.wrapper';
import { Toaster } from '@gitroom/react/toaster/toaster';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));
export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <MantineWrapper>
      <Toaster />
      <div className="bg-[#0E0E0E] flex flex-1 p-[12px] gap-[12px] min-h-screen w-screen text-white">
        {/*<style>{`html, body {overflow-x: hidden;}`}</style>*/}
        <ReturnUrlComponent />
        <div className="flex flex-col py-[40px] px-[20px] flex-1 lg:w-[600px] lg:flex-none rounded-[12px] text-white p-[12px] bg-[#1A1919]">
          <div className="w-full max-w-[440px] mx-auto justify-center gap-[20px] h-full flex flex-col text-white">
            <LogoTextComponent />
            <div className="flex">{children}</div>
          </div>
        </div>
        <div className="text-[36px] flex-1 pt-[88px] hidden lg:flex flex-col items-center">
          <div className="text-center">
            <span className="text-[14px] uppercase tracking-widest text-[#5eead4]">B.O.B Lesson 01 · Social</span>
            <br />
            Build your own<br />social media scheduler.
            <p className="mt-[24px] text-[18px] text-[#a3a3a3]">Build it. Own it. Learn how.</p>
          </div>
          <p className="mt-[32px] max-w-[420px] text-center text-[14px] text-[#a3a3a3]">
            One practical project in the Building on a Budget lesson series.
            Built on the open-source work of Postiz and its contributors.
          </p>
        </div>
      </div>
    </MantineWrapper>
  );
}
