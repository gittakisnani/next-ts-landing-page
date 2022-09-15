import { StaticImageData } from "next/image"
import { ComponentElement, ReactElement, ReactNode } from "react"

export type ContainerProps = {
    children: ReactNode,
    className?: string
}

export interface WindowSize {
    width: undefined | number
    height: undefined | number
}

export interface Link {
    text: string
    link?: string
}

export interface NavLink extends Link {
    subLinks?: SubLink[] | null
}

export interface SubLink extends Link {
    secondSubLinks?: Link[] | null
}

export type FeatureProps = {
    feature: string
    link: string
    desc: string
    icon: ReactElement
}

export interface Person {
    name: string
    job: string
    img: StaticImageData | string 
}

export type CardProps = {
    desc: string
} & Person