import { MY_DATA } from "@/db/data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Experience',
    description: MY_DATA.experience.work.summary
}

export default function Layout(props: {
    children: React.ReactNode
    modal: React.ReactNode
}) {
    return (
        <>
            {props.children}
            {props.modal}
        </>
    )
}