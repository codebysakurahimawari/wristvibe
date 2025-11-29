import React from 'react';

const headingSizeMap = {
  main: 'text-[80px]',
  secondary: 'text-[64px]',
  tertiary: 'text-[48px]',
};

const descriptionSizeMap = {
  main: 'text-[24px]',
  secondary: 'text-[20px]',
  tertiary: 'text-[16px]',
};

const headingMaxWidthMap = {
  base: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};
const descriptionMaxWidthMap = {
  sm: 'max-w-sm',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

const alignmentMap = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

interface SectionTitleProps {
  heading: string;
  description?: string; // optional now
  headingAlignment?: 'left' | 'center' | 'right';
  descriptionAlignment?: 'left' | 'center' | 'right';
  headingFontSize?: 'main' | 'secondary' | 'tertiary';
  descriptionFontSize?: 'main' | 'secondary' | 'tertiary';
  headingFontWeight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-semibold' | 'font-bold';
  descriptionFontWeight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-semibold' | 'font-bold';
  headingMaxWidth?: keyof typeof headingMaxWidthMap;
  descriptionMaxWidth?: keyof typeof descriptionMaxWidthMap;
  headingFontColor?: string;
  descriptionFontColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  heading,
  description,
  headingAlignment = 'center',
  descriptionAlignment = 'center',
  headingFontSize = 'main',
  descriptionFontSize = 'main',
  headingFontWeight = 'font-normal',
  descriptionFontWeight = 'font-normal',
  headingMaxWidth = '4xl',
  descriptionMaxWidth = '2xl',
  headingFontColor = 'text-black',
  descriptionFontColor = 'text-gray-600',
}) => {
  const headingSizeClass = headingSizeMap[headingFontSize];
  const descriptionSizeClass = descriptionSizeMap[descriptionFontSize];
  const headingMaxWidthClass = headingMaxWidthMap[headingMaxWidth];
  const descriptionMaxWidthClass = descriptionMaxWidthMap[descriptionMaxWidth];
  const headingAlignClass = alignmentMap[headingAlignment];
  const descriptionAlignClass = alignmentMap[descriptionAlignment];

  return (
    <section className="flex flex-col gap-4">
      <h2
        className={`flex ${headingAlignClass} ${headingSizeClass} ${headingMaxWidthClass} ${headingFontWeight} tracking-tight !leading-tight ${headingFontColor} ${
          headingAlignment === 'center' ? 'mx-auto' : ''
        }`}
      >
        {heading}
      </h2>

      {description && (
        <p
          className={`flex ${descriptionAlignClass} ${descriptionSizeClass} ${descriptionMaxWidthClass} ${descriptionFontWeight} !leading-snug ${descriptionFontColor} ${
            descriptionAlignment === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default SectionTitle;
