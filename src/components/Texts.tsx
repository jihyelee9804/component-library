import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
import {makeClassName} from './textUtils'

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement>

// 제목
export type TitleProps = TextProps & {
    numberOfLines?: number
}
export const Title: FC<TitleProps> = ({
    className: _className,
    numberOfLines,
    ...props
}) => {
    const className = makeClassName(
        'font-bold text-5xl text-center whitespace-pre-line',
        _className,
        numberOfLines,
    )
    return <p {...props} className={className} />
}

// 요약
export type SubtitleProps = TitleProps & {}
export const Subtitle: FC<SubtitleProps> = ({
    className: _className,
    numberOfLines,
    ...props
}) => {
    const className = makeClassName(
        'font-semibold text-3xl text-center whitespace-pre-line',
        _className,
        numberOfLines,
    )
    return <p {...props} className={className} />
}

// 요약
export type SummaryProps = SubtitleProps & {}
export const Summary: FC<SummaryProps> = ({
    className: _className,
    numberOfLines,
    ...props
}) => {
    const className = makeClassName(
        'text-sm whitespace-pre-line',
        _className,
        numberOfLines,
    )
    return <p {...props} className={className} />
}

// 문단
export type ParagraphProps = SummaryProps & {}
export const Paragraph: FC<ParagraphProps> = ({
    className: _className,
    numberOfLines,
    ...props
}) => {
    const className = makeClassName(
        'font-normal text-base whitespace-pre-line',
        _className,
        numberOfLines,
    )
    return <p {...props} className={className} />
}