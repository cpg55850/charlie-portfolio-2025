import Breadcrumb from './Breadcrumb'

interface BreadcrumbItem {
    label: string
    href?: string
}

interface ProjectLayoutProps {
    children: React.ReactNode
    breadcrumbItems: BreadcrumbItem[]
    className?: string
}

export default function ProjectLayout({
    children,
    breadcrumbItems,
    className = ""
}: ProjectLayoutProps) {
    return (
        <div className={`max-w-screen-lg mx-auto px-8 py-8 bg-black bg-opacity-50 rounded-lg ${className}`}>
            <Breadcrumb items={breadcrumbItems} />
            {children}
        </div>
    )
}
