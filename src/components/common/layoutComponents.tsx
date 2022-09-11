
import './layoutComponents.scss';

export const AsFlexFullStretchRowLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='asflex-full-stretch-row-layout'>
            {children}
        </div>
    );
}

export const FlexRowLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex-row-layout'>
            {children}
        </div>
    );
}