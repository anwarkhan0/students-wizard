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
import { Switch } from "@/components/ui/switch"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Country {
  id: number
  name: string
  code: string
  visaRequired: boolean
  processingTime: string
  description?: string
  createdAt: string
}

const initialCountries: Country[] = [
  {
    id: 1,
    name: "United States",
    code: "US",
    visaRequired: true,
    processingTime: "30 days",
    description: "Student visa F-1 required for international students",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Canada",
    code: "CA",
    visaRequired: true,
    processingTime: "45 days",
    description: "Study permit required for programs longer than 6 months",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "United Kingdom",
    code: "UK",
    visaRequired: true,
    processingTime: "60 days",
    description: "Student visa required for all international students",
    createdAt: "2024-01-20",
  },
  {
    id: 4,
    name: "Australia",
    code: "AU",
    visaRequired: true,
    processingTime: "35 days",
    description: "Student visa subclass 500 required",
    createdAt: "2024-01-12",
  },
]

export function CountryManagement() {
  const [countries, setCountries] = useState<Country[]>(initialCountries)
  const [searchTerm, setSearchTerm] = useState("")
  const [visaFilter, setVisaFilter] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingCountry, setEditingCountry] = useState<Country | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    visaRequired: true,
    processingTime: "",
    description: "",
  })
  const { toast } = useToast()

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesVisa =
      visaFilter === "all" ||
      (visaFilter === "required" && country.visaRequired) ||
      (visaFilter === "not-required" && !country.visaRequired)
    return matchesSearch && matchesVisa
  })

  const handleAddCountry = () => {
    const newCountry: Country = {
      id: Math.max(...countries.map((c) => c.id)) + 1,
      ...formData,
      createdAt: new Date().toISOString().split("T")[0],
    }
    setCountries([...countries, newCountry])
    setIsAddDialogOpen(false)
    resetForm()
    toast({
      title: "Country added",
      description: `${newCountry.name} has been added successfully.`,
    })
  }

  const handleEditCountry = () => {
    if (!editingCountry) return

    const updatedCountries = countries.map((country) =>
      country.id === editingCountry.id ? { ...country, ...formData } : country,
    )
    setCountries(updatedCountries)
    setIsEditDialogOpen(false)
    setEditingCountry(null)
    resetForm()
    toast({
      title: "Country updated",
      description: `${formData.name} has been updated successfully.`,
    })
  }

  const handleDeleteCountry = (countryId: number) => {
    const country = countries.find((c) => c.id === countryId)
    setCountries(countries.filter((c) => c.id !== countryId))
    toast({
      title: "Country deleted",
      description: `${country?.name} has been deleted successfully.`,
      variant: "destructive",
    })
  }

  const openEditDialog = (country: Country) => {
    setEditingCountry(country)
    setFormData({
      name: country.name,
      code: country.code,
      visaRequired: country.visaRequired,
      processingTime: country.processingTime,
      description: country.description || "",
    })
    setIsEditDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      visaRequired: true,
      processingTime: "",
      description: "",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-balance">Country Management</h2>
          <p className="text-muted-foreground">Manage countries and visa requirements</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Country
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Country</DialogTitle>
              <DialogDescription>
                Add a new country with visa requirements and processing information.
              </DialogDescription>
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
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  className="col-span-3"
                  placeholder="US, CA, UK..."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="processing-time" className="text-right">
                  Processing Time
                </Label>
                <Input
                  id="processing-time"
                  value={formData.processingTime}
                  onChange={(e) => setFormData({ ...formData, processingTime: e.target.value })}
                  className="col-span-3"
                  placeholder="30 days"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="visa-required" className="text-right">
                  Visa Required
                </Label>
                <div className="col-span-3">
                  <Switch
                    id="visa-required"
                    checked={formData.visaRequired}
                    onCheckedChange={(checked) => setFormData({ ...formData, visaRequired: checked })}
                  />
                </div>
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
                  placeholder="Additional visa information..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddCountry}>
                Add Country
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
            placeholder="Search countries..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={visaFilter} onValueChange={setVisaFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by visa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Countries</SelectItem>
            <SelectItem value="required">Visa Required</SelectItem>
            <SelectItem value="not-required">No Visa Required</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Countries</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{countries.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visa Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{countries.filter((c) => c.visaRequired).length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">No Visa Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{countries.filter((c) => !c.visaRequired).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Countries Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Visa Required</TableHead>
              <TableHead>Processing Time</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCountries.map((country) => (
              <TableRow key={country.id}>
                <TableCell className="font-medium">{country.name}</TableCell>
                <TableCell>{country.code}</TableCell>
                <TableCell>
                  <Badge variant={country.visaRequired ? "destructive" : "default"}>
                    {country.visaRequired ? "Required" : "Not Required"}
                  </Badge>
                </TableCell>
                <TableCell>{country.processingTime}</TableCell>
                <TableCell className="max-w-[200px] truncate">{country.description || "-"}</TableCell>
                <TableCell>{country.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openEditDialog(country)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteCountry(country.id)}>
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
            <DialogTitle>Edit Country</DialogTitle>
            <DialogDescription>Update country information and visa requirements.</DialogDescription>
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
              <Label htmlFor="edit-code" className="text-right">
                Code
              </Label>
              <Input
                id="edit-code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-processing-time" className="text-right">
                Processing Time
              </Label>
              <Input
                id="edit-processing-time"
                value={formData.processingTime}
                onChange={(e) => setFormData({ ...formData, processingTime: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-visa-required" className="text-right">
                Visa Required
              </Label>
              <div className="col-span-3">
                <Switch
                  id="edit-visa-required"
                  checked={formData.visaRequired}
                  onCheckedChange={(checked) => setFormData({ ...formData, visaRequired: checked })}
                />
              </div>
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
            <Button type="submit" onClick={handleEditCountry}>
              Update Country
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
