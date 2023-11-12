export type ButtonType = 'primary' | 'default' | 'danger' | 'warning' | 'success' | ''


export interface ButtonProps {
  size: String
  type: ButtonType
  disabled: Boolean
  loading: Boolean
}

