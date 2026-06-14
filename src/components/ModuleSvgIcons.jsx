function SvgBase({ children, className = 'h-6 w-6', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function DidactiqueIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M4 5.5c2.8-.9 5.2-.4 8 1.4 2.8-1.8 5.2-2.3 8-1.4v12.2c-2.8-.9-5.2-.4-8 1.4-2.8-1.8-5.2-2.3-8-1.4V5.5Z" />
      <path d="M12 6.9v12.2" />
      <path d="m8.5 11.2-1.4 1.4 1.4 1.4" />
      <path d="m15.5 11.2 1.4 1.4-1.4 1.4" />
    </SvgBase>
  );
}

export function SciencesEducationIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M12 4.5c2.5 0 4.5 1.8 4.5 4.1 0 1.4-.7 2.6-1.8 3.4.7.5 1.1 1.3 1.1 2.2 0 1.8-1.5 3.3-3.5 3.3H12" />
      <path d="M12 4.5c-2.5 0-4.5 1.8-4.5 4.1 0 1.4.7 2.6 1.8 3.4-.7.5-1.1 1.3-1.1 2.2 0 1.8 1.5 3.3 3.5 3.3H12" />
      <path d="M12 4.5v13" />
      <path d="M8.5 8.2h2" />
      <path d="M13.5 10.5h2" />
      <path d="M9 14.2h2.2" />
    </SvgBase>
  );
}

export function PlanificationIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M6 4v3" />
      <path d="M18 4v3" />
      <rect x="4" y="6" width="16" height="14" rx="3" />
      <path d="M4 10h16" />
      <path d="m8 15 2.2 2.2L16 12" />
    </SvgBase>
  );
}

export function GestionIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M5 7.5h14" />
      <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M8 12h3" />
      <path d="M8 16h3" />
      <path d="M14 12h2" />
      <path d="M14 16h2" />
    </SvgBase>
  );
}

export function AlgorithmiqueIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="4" y="4" width="6" height="5" rx="1.5" />
      <rect x="14" y="15" width="6" height="5" rx="1.5" />
      <path d="M7 9v3.5a2 2 0 0 0 2 2h6" />
      <path d="M17 15v-3.5a2 2 0 0 0-2-2h-2" />
      <path d="m11 7 2 2-2 2" />
    </SvgBase>
  );
}

export function ArchitectureIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 3v4" />
      <path d="M15 3v4" />
      <path d="M9 17v4" />
      <path d="M15 17v4" />
      <path d="M3 9h4" />
      <path d="M3 15h4" />
      <path d="M17 9h4" />
      <path d="M17 15h4" />
    </SvgBase>
  );
}

export function RechercheIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M6 4.5h8l4 4v9A2.5 2.5 0 0 1 15.5 20h-9A2.5 2.5 0 0 1 4 17.5V7a2.5 2.5 0 0 1 2-2.5Z" />
      <path d="M14 4.5v4h4" />
      <circle cx="10" cy="13" r="2.4" />
      <path d="m11.8 14.8 2.2 2.2" />
    </SvgBase>
  );
}

export function TiceIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M9 20h6" />
      <path d="M12 16v4" />
      <path d="M8.5 10.5h3" />
      <path d="m14 9.5 2 2-2 2" />
    </SvgBase>
  );
}

export function GestionDeuxIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M9 4h6l1 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l1-2Z" />
      <path d="M9 6h6" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </SvgBase>
  );
}

export function EvaluationIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2.5" />
      <path d="m8 10 1.3 1.3L12 8.6" />
      <path d="M14 10h2" />
      <path d="m8 15 1.3 1.3L12 13.6" />
      <path d="M14 15h2" />
    </SvgBase>
  );
}

export function ProductionIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M8.5 4.5h3v4h4v3h4v5h-5v3h-5v-4h-4v-5h3v-6Z" />
      <path d="m14.5 5.5 4 4" />
      <path d="m18.5 5.5-4 4" />
    </SvgBase>
  );
}

export function AnalyseIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M5 19V5" />
      <path d="M5 19h15" />
      <path d="M8 16v-4" />
      <path d="M12 16V8" />
      <path d="M16 16v-6" />
      <path d="m8 9 4-3 4 2 3-3" />
    </SvgBase>
  );
}

export function BaseDonneesIcon(props) {
  return (
    <SvgBase {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </SvgBase>
  );
}

export function DeveloppementWebIcon(props) {
  return (
    <SvgBase {...props}>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M8.5 10.5 6.5 12l2 1.5" />
      <path d="m15.5 10.5 2 1.5-2 1.5" />
      <path d="m13 9.5-2 5" />
      <path d="M9 20h6" />
      <path d="M12 17v3" />
    </SvgBase>
  );
}

export function ReseauxIcon(props) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="7" r="2" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="m7 8.2 2.8 2" />
      <path d="m17 8.2-2.8 2" />
      <path d="m8 17 2.3-2.7" />
      <path d="m16 17-2.3-2.7" />
    </SvgBase>
  );
}

export function EthiquesIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M12 4v16" />
      <path d="M6 7h12" />
      <path d="m7 7-3 6h6L7 7Z" />
      <path d="m17 7-3 6h6l-3-6Z" />
      <path d="M9 20h6" />
    </SvgBase>
  );
}

export function VieScolaireIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="m4 10 8-5 8 5" />
      <path d="M6 10v9h12v-9" />
      <path d="M9 19v-5h6v5" />
      <path d="M9 11h.01" />
      <path d="M12 11h.01" />
      <path d="M15 11h.01" />
    </SvgBase>
  );
}
