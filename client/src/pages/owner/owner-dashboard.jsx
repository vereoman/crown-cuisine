"use client";

import * as React from "react";
import {
    Calendar,
    Clock,
    LayoutDashboard,
    LogOut,
    Menu,
    MessageSquare,
    Plus,
    Search,
    Settings,
    Star,
    Store,
    User,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for restaurants
const restaurants = [
    {
        id: 1,
        name: "The Italian Bistro",
        image: "/placeholder.svg?height=100&width=200",
        cuisine: "Italian",
        rating: 4.8,
        address: "123 Main St, Anytown",
        availableTables: 5,
    },
    {
        id: 2,
        name: "Sushi Paradise",
        image: "/placeholder.svg?height=100&width=200",
        cuisine: "Japanese",
        rating: 4.6,
        address: "456 Oak Ave, Somewhere",
        availableTables: 3,
    },
    {
        id: 3,
        name: "Taco Fiesta",
        image: "/placeholder.svg?height=100&width=200",
        cuisine: "Mexican",
        rating: 4.5,
        address: "789 Pine Rd, Elsewhere",
        availableTables: 7,
    },
    {
        id: 4,
        name: "Le Petit Café",
        image: "/placeholder.svg?height=100&width=200",
        cuisine: "French",
        rating: 4.9,
        address: "101 Elm St, Nowhere",
        availableTables: 2,
    },
];

// Sample data for reservations
const reservations = [
    {
        id: 1,
        customerName: "John Doe",
        restaurant: "The Italian Bistro",
        date: "2023-06-15",
        time: "19:00",
        guests: 4,
        status: "confirmed",
    },
    {
        id: 2,
        customerName: "Jane Smith",
        restaurant: "Sushi Paradise",
        date: "2023-06-16",
        time: "20:00",
        guests: 2,
        status: "pending",
    },
    {
        id: 3,
        customerName: "Robert Johnson",
        restaurant: "Taco Fiesta",
        date: "2023-06-17",
        time: "18:30",
        guests: 6,
        status: "confirmed",
    },
    {
        id: 4,
        customerName: "Emily Davis",
        restaurant: "Le Petit Café",
        date: "2023-06-18",
        time: "19:30",
        guests: 2,
        status: "cancelled",
    },
    {
        id: 5,
        customerName: "Michael Wilson",
        restaurant: "The Italian Bistro",
        date: "2023-06-19",
        time: "20:30",
        guests: 3,
        status: "confirmed",
    },
];

// Stats data
const stats = [
    {
        title: "Total Reservations",
        value: "128",
        icon: Calendar,
    },
    {
        title: "Active Restaurants",
        value: "24",
        icon: Store,
    },
    {
        title: "Customer Satisfaction",
        value: "94%",
        icon: Star,
    },
    {
        title: "Pending Requests",
        value: "7",
        icon: Clock,
    },
];

export default function RestaurantDashboard() {
    const [date, setDate] = (React.useState < Date) | (undefined > new Date());
    const [searchQuery, setSearchQuery] = React.useState("");
    const [activeTab, setActiveTab] = React.useState("overview");

    // Filter restaurants based on search query
    const filteredRestaurants = restaurants.filter(
        (restaurant) =>
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SidebarProvider defaultOpen>
            <div className="flex min-h-screen w-full bg-background">
                <DashboardSidebar />
                <div className="flex-1">
                    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
                        <SidebarTrigger />
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search restaurants, cuisines..."
                                        className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/placeholder.svg"
                                            alt="User"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex-1 p-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h1 className="text-3xl font-bold tracking-tight">
                                    Dashboard
                                </h1>
                                <div className="flex items-center gap-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="flex gap-2"
                                            >
                                                <Calendar className="h-4 w-4" />
                                                {date
                                                    ? date.toLocaleDateString()
                                                    : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <CalendarComponent
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <Button>
                                        <Plus className="mr-2 h-4 w-4" />
                                        New Reservation
                                    </Button>
                                </div>
                            </div>

                            <Tabs
                                defaultValue="overview"
                                className="space-y-4"
                                onValueChange={setActiveTab}
                            >
                                <TabsList>
                                    <TabsTrigger value="overview">
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger value="restaurants">
                                        Restaurants
                                    </TabsTrigger>
                                    <TabsTrigger value="reservations">
                                        Reservations
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent
                                    value="overview"
                                    className="space-y-4"
                                >
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        {stats.map((stat, index) => (
                                            <Card key={index}>
                                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                                    <CardTitle className="text-sm font-medium">
                                                        {stat.title}
                                                    </CardTitle>
                                                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="text-2xl font-bold">
                                                        {stat.value}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Card className="col-span-1">
                                            <CardHeader>
                                                <CardTitle>
                                                    Recent Reservations
                                                </CardTitle>
                                                <CardDescription>
                                                    You have{" "}
                                                    {reservations.length} total
                                                    reservations
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>
                                                                Customer
                                                            </TableHead>
                                                            <TableHead>
                                                                Restaurant
                                                            </TableHead>
                                                            <TableHead>
                                                                Date
                                                            </TableHead>
                                                            <TableHead>
                                                                Status
                                                            </TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {reservations
                                                            .slice(0, 3)
                                                            .map(
                                                                (
                                                                    reservation
                                                                ) => (
                                                                    <TableRow
                                                                        key={
                                                                            reservation.id
                                                                        }
                                                                    >
                                                                        <TableCell className="font-medium">
                                                                            {
                                                                                reservation.customerName
                                                                            }
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            {
                                                                                reservation.restaurant
                                                                            }
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            {
                                                                                reservation.date
                                                                            }
                                                                        </TableCell>
                                                                        <TableCell>
                                                                            <Badge
                                                                                variant={
                                                                                    reservation.status ===
                                                                                    "confirmed"
                                                                                        ? "default"
                                                                                        : reservation.status ===
                                                                                            "pending"
                                                                                          ? "outline"
                                                                                          : "destructive"
                                                                                }
                                                                            >
                                                                                {
                                                                                    reservation.status
                                                                                }
                                                                            </Badge>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                )
                                                            )}
                                                    </TableBody>
                                                </Table>
                                            </CardContent>
                                            <CardFooter>
                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                >
                                                    View All
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                        <Card className="col-span-1">
                                            <CardHeader>
                                                <CardTitle>
                                                    Featured Restaurants
                                                </CardTitle>
                                                <CardDescription>
                                                    Popular restaurants with
                                                    available tables
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-4">
                                                {restaurants
                                                    .slice(0, 2)
                                                    .map((restaurant) => (
                                                        <div
                                                            key={restaurant.id}
                                                            className="flex items-center gap-4"
                                                        >
                                                            <img
                                                                src={
                                                                    restaurant.image ||
                                                                    "/placeholder.svg"
                                                                }
                                                                alt={
                                                                    restaurant.name
                                                                }
                                                                className="h-16 w-24 rounded-md object-cover"
                                                            />
                                                            <div className="grid gap-1">
                                                                <h3 className="font-semibold">
                                                                    {
                                                                        restaurant.name
                                                                    }
                                                                </h3>
                                                                <div className="flex items-center text-sm text-muted-foreground">
                                                                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                                                                    {
                                                                        restaurant.rating
                                                                    }{" "}
                                                                    ·{" "}
                                                                    {
                                                                        restaurant.cuisine
                                                                    }
                                                                </div>
                                                                <div className="text-xs text-muted-foreground">
                                                                    {
                                                                        restaurant.availableTables
                                                                    }{" "}
                                                                    tables
                                                                    available
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </CardContent>
                                            <CardFooter>
                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                >
                                                    View All Restaurants
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="restaurants"
                                    className="space-y-4"
                                >
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {filteredRestaurants.map(
                                            (restaurant) => (
                                                <Card
                                                    key={restaurant.id}
                                                    className="overflow-hidden"
                                                >
                                                    <img
                                                        src={
                                                            restaurant.image ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={restaurant.name}
                                                        className="h-48 w-full object-cover"
                                                    />
                                                    <CardHeader>
                                                        <CardTitle>
                                                            {restaurant.name}
                                                        </CardTitle>
                                                        <CardDescription>
                                                            {restaurant.cuisine}{" "}
                                                            ·{" "}
                                                            {restaurant.address}
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex items-center gap-2">
                                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                                            <span>
                                                                {
                                                                    restaurant.rating
                                                                }
                                                            </span>
                                                        </div>
                                                        <p className="mt-2 text-sm">
                                                            {
                                                                restaurant.availableTables
                                                            }{" "}
                                                            tables available
                                                            today
                                                        </p>
                                                    </CardContent>
                                                    <CardFooter className="flex justify-between">
                                                        <Button variant="outline">
                                                            View Details
                                                        </Button>
                                                        <Button>Reserve</Button>
                                                    </CardFooter>
                                                </Card>
                                            )
                                        )}
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="reservations"
                                    className="space-y-4"
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                All Reservations
                                            </CardTitle>
                                            <CardDescription>
                                                Manage your restaurant
                                                reservations
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col gap-4">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <Select defaultValue="all">
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Filter by status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="all">
                                                                All Statuses
                                                            </SelectItem>
                                                            <SelectItem value="confirmed">
                                                                Confirmed
                                                            </SelectItem>
                                                            <SelectItem value="pending">
                                                                Pending
                                                            </SelectItem>
                                                            <SelectItem value="cancelled">
                                                                Cancelled
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Select defaultValue="all">
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Filter by restaurant" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="all">
                                                                All Restaurants
                                                            </SelectItem>
                                                            {restaurants.map(
                                                                (
                                                                    restaurant
                                                                ) => (
                                                                    <SelectItem
                                                                        key={
                                                                            restaurant.id
                                                                        }
                                                                        value={restaurant.id.toString()}
                                                                    >
                                                                        {
                                                                            restaurant.name
                                                                        }
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>

                                                    <Button
                                                        variant="outline"
                                                        className="ml-auto"
                                                    >
                                                        <Plus className="mr-2 h-4 w-4" />
                                                        Add Reservation
                                                    </Button>
                                                </div>

                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>
                                                                ID
                                                            </TableHead>
                                                            <TableHead>
                                                                Customer
                                                            </TableHead>
                                                            <TableHead>
                                                                Restaurant
                                                            </TableHead>
                                                            <TableHead>
                                                                Date
                                                            </TableHead>
                                                            <TableHead>
                                                                Time
                                                            </TableHead>
                                                            <TableHead>
                                                                Guests
                                                            </TableHead>
                                                            <TableHead>
                                                                Status
                                                            </TableHead>
                                                            <TableHead className="text-right">
                                                                Actions
                                                            </TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        {reservations.map(
                                                            (reservation) => (
                                                                <TableRow
                                                                    key={
                                                                        reservation.id
                                                                    }
                                                                >
                                                                    <TableCell>
                                                                        #
                                                                        {
                                                                            reservation.id
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell className="font-medium">
                                                                        {
                                                                            reservation.customerName
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            reservation.restaurant
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            reservation.date
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            reservation.time
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {
                                                                            reservation.guests
                                                                        }
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Badge
                                                                            variant={
                                                                                reservation.status ===
                                                                                "confirmed"
                                                                                    ? "default"
                                                                                    : reservation.status ===
                                                                                        "pending"
                                                                                      ? "outline"
                                                                                      : "destructive"
                                                                            }
                                                                        >
                                                                            {
                                                                                reservation.status
                                                                            }
                                                                        </Badge>
                                                                    </TableCell>
                                                                    <TableCell className="text-right">
                                                                        <DropdownMenu>
                                                                            <DropdownMenuTrigger
                                                                                asChild
                                                                            >
                                                                                <Button
                                                                                    variant="ghost"
                                                                                    size="icon"
                                                                                >
                                                                                    <Menu className="h-4 w-4" />
                                                                                    <span className="sr-only">
                                                                                        Open
                                                                                        menu
                                                                                    </span>
                                                                                </Button>
                                                                            </DropdownMenuTrigger>
                                                                            <DropdownMenuContent align="end">
                                                                                <DropdownMenuItem>
                                                                                    Edit
                                                                                </DropdownMenuItem>
                                                                                <DropdownMenuItem>
                                                                                    View
                                                                                    Details
                                                                                </DropdownMenuItem>
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuItem>
                                                                                    Cancel
                                                                                    Reservation
                                                                                </DropdownMenuItem>
                                                                            </DropdownMenuContent>
                                                                        </DropdownMenu>
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Create New Reservation
                                            </CardTitle>
                                            <CardDescription>
                                                Book a table at one of our
                                                partner restaurants
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="customer"
                                                        className="text-sm font-medium"
                                                    >
                                                        Customer Name
                                                    </label>
                                                    <Input
                                                        id="customer"
                                                        placeholder="Enter customer name"
                                                    />
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="restaurant"
                                                        className="text-sm font-medium"
                                                    >
                                                        Restaurant
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger id="restaurant">
                                                            <SelectValue placeholder="Select restaurant" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {restaurants.map(
                                                                (
                                                                    restaurant
                                                                ) => (
                                                                    <SelectItem
                                                                        key={
                                                                            restaurant.id
                                                                        }
                                                                        value={restaurant.id.toString()}
                                                                    >
                                                                        {
                                                                            restaurant.name
                                                                        }
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="date"
                                                        className="text-sm font-medium"
                                                    >
                                                        Date
                                                    </label>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                id="date"
                                                                variant="outline"
                                                                className="w-full justify-start text-left font-normal"
                                                            >
                                                                <Calendar className="mr-2 h-4 w-4" />
                                                                {date
                                                                    ? date.toLocaleDateString()
                                                                    : "Pick a date"}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <CalendarComponent
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={
                                                                    setDate
                                                                }
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="time"
                                                        className="text-sm font-medium"
                                                    >
                                                        Time
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger id="time">
                                                            <SelectValue placeholder="Select time" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="17:00">
                                                                5:00 PM
                                                            </SelectItem>
                                                            <SelectItem value="17:30">
                                                                5:30 PM
                                                            </SelectItem>
                                                            <SelectItem value="18:00">
                                                                6:00 PM
                                                            </SelectItem>
                                                            <SelectItem value="18:30">
                                                                6:30 PM
                                                            </SelectItem>
                                                            <SelectItem value="19:00">
                                                                7:00 PM
                                                            </SelectItem>
                                                            <SelectItem value="19:30">
                                                                7:30 PM
                                                            </SelectItem>
                                                            <SelectItem value="20:00">
                                                                8:00 PM
                                                            </SelectItem>
                                                            <SelectItem value="20:30">
                                                                8:30 PM
                                                            </SelectItem>
                                                            <SelectItem value="21:00">
                                                                9:00 PM
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="guests"
                                                        className="text-sm font-medium"
                                                    >
                                                        Number of Guests
                                                    </label>
                                                    <Select>
                                                        <SelectTrigger id="guests">
                                                            <SelectValue placeholder="Select number of guests" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {[
                                                                1, 2, 3, 4, 5,
                                                                6, 7, 8, 9, 10,
                                                            ].map((num) => (
                                                                <SelectItem
                                                                    key={num}
                                                                    value={num.toString()}
                                                                >
                                                                    {num}{" "}
                                                                    {num === 1
                                                                        ? "person"
                                                                        : "people"}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="grid gap-2">
                                                    <label
                                                        htmlFor="notes"
                                                        className="text-sm font-medium"
                                                    >
                                                        Special Requests
                                                    </label>
                                                    <Input
                                                        id="notes"
                                                        placeholder="Any special requests or notes"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Button variant="outline">
                                                Cancel
                                            </Button>
                                            <Button>Create Reservation</Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}

function DashboardSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="border-b">
                <div className="flex items-center gap-2 px-2">
                    <Store className="h-6 w-6" />
                    <span className="text-lg font-semibold">TableMaster</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive>
                                    <a href="#">
                                        <LayoutDashboard className="h-4 w-4" />
                                        <span>Dashboard</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Store className="h-4 w-4" />
                                        <span>Restaurants</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Calendar className="h-4 w-4" />
                                        <span>Reservations</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Users className="h-4 w-4" />
                                        <span>Customers</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <Star className="h-4 w-4" />
                                        <span>Reviews</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>Feedback</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                                <User className="h-4 w-4" />
                                <span>Profile</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
