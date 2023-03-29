import { Icons } from '@/components/ui/icons';

type IconsType = {
  icon: string
};

export const InfoIcons = ({ icon }:IconsType) => {
  const GetIcon = () => {
    {switch (icon) {
      case 'spring' : return <Icons.Spring />;
      case 'php' : return <Icons.Php />;
      case 'js' : return <Icons.Js />;
      case 'laravel' : return <Icons.Laravel />;
      case 'docker' : return <Icons.Docker />;
      case 'java' : return <Icons.Java  />;
      case 'react' : return <Icons.React />;
      case 'tailwind' : return <Icons.Tailwind />;
      case 'mongo' : return <Icons.Mongo />;

      default : return null;
    }
    }
  };

  return (
      <>
        {GetIcon()}
      </>
  );

};