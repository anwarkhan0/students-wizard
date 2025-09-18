"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Globe,
  GraduationCap,
  BookOpen,
  FileText,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserManagement } from "@/components/admin/user-management"
import { CountryManagement } from "@/components/admin/country-management"
import { UniversityManagement } from "@/components/admin/university-management"

// Mock data for demonstration
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "STUDENT", status: "ACTIVE" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "ADMIN", status: "ACTIVE" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "STUDENT", status: "INACTIVE" },
]

const mockCountries = [
  { id: 1, name: "United States", code: "US", visaRequired: true, processingTime: "30 days" },
  { id: 2, name: "Canada", code: "CA", visaRequired: true, processingTime: "45 days" },
  { id: 3, name: "United Kingdom", code: "UK", visaRequired: true, processingTime: "60 days" },
]

const mockUniversities = [
  { id: 1, name: "Harvard University", country: "United States", ranking: 1, type: "PRIVATE" },
  { id: 2, name: "University of Toronto", country: "Canada", ranking: 25, type: "PUBLIC" },
  { id: 3, name: "Oxford University", country: "United Kingdom", ranking: 5, type: "PUBLIC" },
]

const mockPrograms = [
  { id: 1, name: "Computer Science", university: "Harvard University", degree: "MASTERS", duration: 24 },
  { id: 2, name: "Business Administration", university: "University of Toronto", degree: "MBA", duration: 20 },
  { id: 3, name: "Engineering", university: "Oxford University", degree: "BACHELORS", duration: 36 },
]

const mockApplications = [
  { id: 1, student: "John Doe", program: "Computer Science", status: "SUBMITTED", date: "2024-01-15" },
  { id: 2, student: "Jane Smith", program: "Business Administration", status: "ACCEPTED", date: "2024-01-10" },
  { id: 3, student: "Bob Johnson", program: "Engineering", status: "PENDING", date: "2024-01-20" },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+12%" },
    { title: "Countries", value: "45", icon: Globe, change: "+2%" },
    { title: "Universities", value: "156", icon: GraduationCap, change: "+8%" },
    { title: "Programs", value: "892", icon: BookOpen, change: "+15%" },
    { title: "Applications", value: "3,456", icon: FileText, change: "+23%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-card-foreground">Student Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-sidebar-border bg-sidebar">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "users" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("users")}
            >
              <Users className="h-4 w-4 mr-2" />
              Users
            </Button>
            <Button
              variant={activeTab === "countries" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("countries")}
            >
              <Globe className="h-4 w-4 mr-2" />
              Countries
            </Button>
            <Button
              variant={activeTab === "universities" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("universities")}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Universities
            </Button>
            <Button
              variant={activeTab === "programs" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("programs")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Programs
            </Button>
            <Button
              variant={activeTab === "applications" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("applications")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Applications
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-balance">Dashboard Overview</h2>
                <p className="text-muted-foreground">Manage your student application system</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-accent">{stat.change}</span> from last month
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest student applications submitted</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockApplications.slice(0, 3).map((app) => (
                      <div key={app.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{app.student}</p>
                          <p className="text-sm text-muted-foreground">{app.program}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              app.status === "ACCEPTED" ? "default" : app.status === "PENDING" ? "secondary" : "outline"
                            }
                          >
                            {app.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "users" && <UserManagement />}

          {activeTab === "countries" && <CountryManagement />}

          {activeTab === "universities" && <UniversityManagement />}

          {activeTab === "programs" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Programs</h2>
                  <p className="text-muted-foreground">Manage academic programs and degrees</p>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Program
                </Button>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>University</TableHead>
                      <TableHead>Degree</TableHead>
                      <TableHead>Duration (months)</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPrograms.map((program) => (
                      <TableRow key={program.id}>
                        <TableCell className="font-medium">{program.name}</TableCell>
                        <TableCell>{program.university}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{program.degree}</Badge>
                        </TableCell>
                        <TableCell>{program.duration}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Applications</h2>
                  <p className="text-muted-foreground">Manage student applications and their status</p>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Application
                </Button>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell className="font-medium">{application.student}</TableCell>
                        <TableCell>{application.program}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              application.status === "ACCEPTED"
                                ? "default"
                                : application.status === "PENDING"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {application.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{application.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
