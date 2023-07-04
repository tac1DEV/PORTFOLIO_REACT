import { SectionWrapper } from '../atom/SectionWrapper';
import { Draw } from './Draw';

export const DrawSection = () => {
  return (
    <SectionWrapper className="draw" title="Montre moi ton amour !">
      <Draw />
    </SectionWrapper>
  );
};
