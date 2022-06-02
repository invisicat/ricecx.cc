import clsxm from '@/lib/clsxm';

type TextLinkProps = {
  newTab?: boolean;
} & React.ComponentPropsWithRef<'a'>;

const TextLink: React.FC<TextLinkProps> = props => {
  const { className, newTab, ...other } = props;
  return (
    <a
      className={clsxm(
        'border-b-2 hover:border-gray-700 transition-all border-dotted',
        className
      )}
      target={!newTab ? '_blank' : undefined}
      {...other}
    >
      {props.children}
    </a>
  );
};

export default TextLink;
