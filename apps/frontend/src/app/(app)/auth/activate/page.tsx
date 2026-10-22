export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { Activate } from '@gitroom/frontend/components/auth/activate';
export const metadata: Metadata = {
  title: `B.O.B Social - Activate your account`,
  description: '',
};
export default async function Auth() {
  return <Activate />;
}
