import styled from "styled-components";
export const Styled = {
 Wrapper: styled.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,
 Header: styled.header`height: 60px; flex-shrink: 0;`,
 Main: styled.main`
   flex: 1; overflow-y: auto; position: relative;
   .studyNav { position: fixed; top: 60px; bottom: 0; left: 0; width: 248px; padding: 22px 14px; overflow-y: auto; background: var(--color-surface-2); border-right: 1px solid var(--color-border); z-index: 4; }
   .studyNavLabel { padding: 0 10px 10px; color: var(--color-text-muted); font-size: 11px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
   .studyNav nav { display: grid; gap: 4px; }
   .studyNav button { display: flex; align-items: center; gap: 10px; width: 100%; padding: 10px; border-radius: 10px; color: var(--color-text-secondary); text-align: left; font-size: 13px; font-weight: 800; }
   .studyNav button:hover, .studyNav button.active { background: var(--color-primary); color: #fff; }
   .studyNav p { margin: 18px 10px 0; color: var(--color-text-muted); font-size: 12px; }
   .contentWrapper { min-height: 100%; max-width: 1440px; margin: 0 0 0 248px; display: flex; flex-direction: column; padding: 15px; }
   .topicWrapper { display: none; }
   .topicWrapper.activeTopic { display: block; }
   .footerWrapper { flex-shrink: 0; }
   @media (max-width: 800px) { .studyNav { position: static; width: auto; margin: 12px; border: 1px solid var(--color-border); border-radius: 16px; max-height: 220px; } .studyNav nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .contentWrapper { margin-left: 0; } }
 `,
};
