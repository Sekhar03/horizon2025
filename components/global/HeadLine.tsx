
import { twMerge } from 'tailwind-merge';

interface HeadLineProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  position?: string;
  containerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

export const HeadLine = ({
    title,
    subtitle,
    tagline,
    position = 'center',
    containerClass,
    titleClass,
    subtitleClass,
}: HeadLineProps) => {
    return (
        <div className="mb-4">
      {(title || subtitle || tagline) && (
        <div
          className={twMerge(
            `mb-6 mx-auto md:mb-12 ${
              position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
            }`,
            containerClass,
          )}
        >
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && <h2 className={twMerge(`font-heading mb-4 font-bold tracking-tight`, titleClass)}>{title}</h2>}
          {subtitle && (
            <p
              className={twMerge(
                `mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ${
                  position === 'left' ? 'text-left ml-0' : position === 'right' ? 'text-right mr-0' : 'text-center'
                }`,
                subtitleClass,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
    )
}
