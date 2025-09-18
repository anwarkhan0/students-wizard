"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, GraduationCap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface University {
  id: number
  name: string
  country: string
  ranking: number
  type: "PUBLIC" | "PRIVATE"
  website?: string
  description?: string
  createdAt: string
}

const initialUniversities: University[] = [
  {
    id: 1,
    name: "Harvard University",
    country: "United States",
    ranking: 1,
    type: "PRIVATE",
    website: "https://harvard.edu",
    description: "Prestigious Ivy League university",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "University of Toronto",
    country: "Canada",
    ranking: 25,
    type: "PUBLIC",
    website: "https://utoronto.ca",
    description: "Leading Canadian research university",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Oxford University",
    country: "United Kingdom",
    ranking: 5,
    type: "PUBLIC",
    website: "https://ox.ac.uk",
    description: "Historic university with collegiate system",
    createdAt: "2024-01-20",
  },
  {
    id: 4,
    name: "Stanford University",
    country: "United States",
    ranking: 3,
    type: "PRIVATE",
    website: "https://stanford.edu",
    description: "Leading technology and innovation hub",
    createdAt: "2024-01-12",
  },
]

const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France"]

export function UniversityManagement() {
  const [universities, setUniversities] = useState<University[]>(initialUniversities)
  const [searchTerm, setSearchTerm] = useState("")
  const [countryFilter, setCountryFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingUniversity, setEditingUniversity] = useState<University | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    ranking: 0,
    type: "PUBLIC" as University["type"],
    website: "",
    description: "",
  })
  const { toast } = useToast()

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.country.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilter === "all" || university.country === countryFilter
    const matchesType = typeFilter === "all" || university.type === typeFilter
    return matchesSearch && matchesCountry && matchesType
  })

  const handleAddUniversity = () => {
    const newUniversity: University = {
      id: Math.max(...universities.map((u) => u.id)) + 1,
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
    }
    setUniversities([...universities, newUniversity])
    setIsAddDialogOpen(false)
    resetForm()
    toast({
      title: "University added",
      description: `${newUniversity.name} has been added successfully.`,
    })
  }

  const handleEditUniversity = () => {
    if (!editingUniversity) return

    const updatedUniversities = universities.map((university) =>
      university.id === editingUniversity.id ? { ...university, ...formData } : university,
    )
    setUniversities(updatedUniversities)
    setIsEditDialogOpen(false)
    setEditingUniversity(null)
    resetForm()
    toast({
      title: "University updated",
      description: `${formData.name} has been updated successfully.`,
    })
  }

  const handleDeleteUniversity = (universityId: number) => {
    const university = universities.find((u) => u.id === universityId)
    setUniversities(universities.filter((u) => u.id !== universityId))
    toast({
      title: "University deleted",
      description: `${university?.name} has been deleted successfully.`,
      variant: "destructive",
    })
  }

  const openEditDialog = (university: University) => {
    setEditingUniversity(university)
    setFormData({
      name: university.name,
      country: university.country,
      ranking: university.ranking,
      type: university.type,
      website: university.website || "",
      description: university.description || "",
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      country: "",
      ranking: 0,
      type: "PUBLIC",
      website: "",
      description: "",
    })
  }

  const getTypeBadgeVariant = (type: University["type"]) => {
    return type === "PRIVATE" ? "default" : "secondary"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-balance">University Management</h2>
          <p className="text-muted-foreground">Manage universities and their information</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add University
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New University</DialogTitle>
              <DialogDescription>Add a new university with its details and ranking information.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ranking" className="text-right">
                  Ranking
                </Label>
                <Input
                  id="ranking"
                  type="number"
                  value={formData.ranking}
                  onChange={(e) => setFormData({ ...formData, ranking: Number.parseInt(e.target.value) || 0 })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">
                  Type
                </Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: University["type"]) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PUBLIC">Public</SelectItem>
                    <SelectItem value="PRIVATE">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="col-span-3"
                  placeholder="https://..."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="col-span-3"
                  placeholder="Brief description..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddUniversity}>
                Add University
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search universities..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={countryFilter} onValueChange={setCountryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="PUBLIC">Public</SelectItem>
            <SelectItem value="PRIVATE">Private</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Universities</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universities.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Public Universities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universities.filter((u) => u.type === "PUBLIC").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Private Universities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universities.filter((u) => u.type === "PRIVATE").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top 10 Ranked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{universities.filter((u) => u.ranking <= 10).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Universities Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Ranking</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUniversities.map((university) => (
              <TableRow key={university.id}>
                <TableCell className="font-medium">{university.name}</TableCell>
                <TableCell>{university.country}</TableCell>
                <TableCell>#{university.ranking}</TableCell>
                <TableCell>
                  <Badge variant={getTypeBadgeVariant(university.type)}>{university.type}</Badge>
                </TableCell>
                <TableCell>
                  {university.website ? (
                    <a
                      href={university.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit
                    </a>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">{university.description || "-"}</TableCell>
                <TableCell>{university.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openEditDialog(university)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDeleteUniversity(university.id)}
                      >
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

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit University</DialogTitle>
            <DialogDescription>Update university information and details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-name" className="text-right">
                Name
              </Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-country" className="text-right">
                Country
              </Label>
              <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-ranking" className="text-right">
                Ranking
              </Label>
              <Input
                id="edit-ranking"
                type="number"
                value={formData.ranking}
                onChange={(e) => setFormData({ ...formData, ranking: Number.parseInt(e.target.value) || 0 })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-type" className="text-right">
                Type
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value: University["type"]) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PUBLIC">Public</SelectItem>
                  <SelectItem value="PRIVATE">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-website" className="text-right">
                Website
              </Label>
              <Input
                id="edit-website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-description" className="text-right">
                Description
              </Label>
              <Input
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleEditUniversity}>
              Update University
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
