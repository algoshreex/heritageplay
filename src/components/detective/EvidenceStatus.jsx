import { IconCheck } from '../Icons.jsx'
import './EvidenceStatus.css'

export const STATUS_META = {
  VERIFIED: {
    label: 'Verified Evidence',
    short: 'Verified',
    description: 'Directly supported by the evidence itself.',
    className: 'evidence-status--verified',
  },
  INTERPRETATION: {
    label: 'Scholarly Interpretation',
    short: 'Interpretation',
    description: 'A reasonable reading of the evidence, not a certainty.',
    className: 'evidence-status--interpretation',
  },
  RECONSTRUCTION: {
    label: 'Reconstruction',
    short: 'Reconstruction',
    description: 'A hypothesis filling a gap the evidence cannot settle.',
    className: 'evidence-status--reconstruction',
  },
}

export default function EvidenceStatus({ status, compact = false }) {
  const meta = STATUS_META[status] ?? STATUS_META.RECONSTRUCTION

  return (
    <span className={`evidence-status ${meta.className}`} title={meta.description}>
      <span className="evidence-status__dot" aria-hidden="true" />
      {status === 'VERIFIED' && <IconCheck size={12} className="evidence-status__icon" />}
      <span className="evidence-status__label">{compact ? meta.short : meta.label}</span>
    </span>
  )
}
