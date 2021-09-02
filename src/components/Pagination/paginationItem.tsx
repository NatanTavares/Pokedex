import { IconType } from "react-icons";

type PaginationItemProps = {
  disabled?: boolean;
  isCurrent?: boolean;
  Icon?: IconType;
  index: number;
  onPageChange: (page: number) => void;
};

export function PaginationItem({
  disabled = false,
  isCurrent = false,
  Icon,
  index,
  onPageChange,
}: PaginationItemProps) {
  if (!!Icon) {
    return (
      <button disabled={disabled}>
        <Icon size={16} />
      </button>
    );
  }

  if (isCurrent) {
    return <button className="isCurrent">{index}</button>;
  }

  return <button onClick={() => onPageChange(index)}>{index}</button>;
}
