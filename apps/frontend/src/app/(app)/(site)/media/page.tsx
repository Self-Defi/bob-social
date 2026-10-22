import { MediaLayoutComponent } from '@gitroom/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `B.O.B Social Media`,
  description: '',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
