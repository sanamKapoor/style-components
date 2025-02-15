const Link = ({ className, children }: { className: string, children: string }) => (
  <a className={className}>{children}</a>
);

export default Link;