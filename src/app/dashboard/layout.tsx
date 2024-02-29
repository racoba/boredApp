import { MainLayout } from "@/layout"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <MainLayout>
          {children}
        </MainLayout>
      </>
  )
}
