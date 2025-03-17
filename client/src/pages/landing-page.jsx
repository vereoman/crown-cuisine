import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    CalendarCheck,
    Utensils,
    CreditCard,
    MenuSquare,
    Warehouse,
    UserCheck,
    Calendar,
    Store,
    Star,
    Clock,
    LayoutDashboard,
    Users,
    MessageSquare,
    Search,
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState("overview");

    // Sample data for restaurants
    const restaurants = [
        {
            id: 1,
            name: "The Italian Bistro",
            image: "/api/placeholder/200/100",
            cuisine: "Italian",
            rating: 4.8,
            availableTables: 5,
        },
        {
            id: 2,
            name: "Sushi Paradise",
            image: "/api/placeholder/200/100",
            cuisine: "Japanese",
            rating: 4.6,
            availableTables: 3,
        },
    ];

    // Sample data for reservations
    const reservations = [
        {
            id: 1,
            customerName: "John Doe",
            restaurant: "The Italian Bistro",
            date: "2023-06-15",
            status: "confirmed",
        },
        {
            id: 2,
            customerName: "Jane Smith",
            restaurant: "Sushi Paradise",
            date: "2023-06-16",
            status: "pending",
        },
        {
            id: 3,
            customerName: "Robert Johnson",
            restaurant: "Taco Fiesta",
            date: "2023-06-17",
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

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navigation */}
            

            {/* Hero Section */}
            <section className="flex items-center justify-center text-center px-6 py-16">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Streamline Your Restaurant
                        <br />
                        Management Experience
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        A comprehensive platform designed to empower restaurant
                        owners and delight customers with seamless, innovative
                        solutions.
                    </p>
                    <div className="flex justify-center gap-4 mb-16">
                        <Button
                            className="bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-6 flex items-center"
                            variant="default"
                        >
                            Get Started
                        </Button>
                        <Button
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-6"
                            variant="secondary"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>

            {/* Dashboard Demo Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Experience Our Interactive Dashboard
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Take a sneak peek at our powerful dashboard that
                            helps restaurant owners and customers manage
                            reservations with ease. Click around to explore the
                            interface.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        {/* Dashboard Header */}
                        <div className="flex h-16 items-center gap-4 border-b bg-white px-6">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <MenuSquare className="h-5 w-5" />
                            </Button>
                            <div className="hidden md:flex w-64 items-center gap-2 font-semibold">
                                <LayoutDashboard className="h-5 w-5" />
                                <span>Restaurant Dashboard</span>
                            </div>
                            <div className="w-full flex-1">
                                <div className="relative max-w-md">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                    <input
                                        type="search"
                                        placeholder="Search restaurants, reservations..."
                                        className="w-full rounded-md border border-gray-200 bg-white pl-8 py-2 text-sm focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="/api/placeholder/40/40"
                                            alt="User"
                                        />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </div>
                        </div>

                        <div className="flex min-h-[600px]">
                            {/* Sidebar */}
                            <div className="hidden md:block w-64 border-r bg-white p-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
                                        <LayoutDashboard className="h-4 w-4" />
                                        <span>Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                        <Store className="h-4 w-4" />
                                        <span>Restaurants</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                        <Calendar className="h-4 w-4" />
                                        <span>Reservations</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                        <Users className="h-4 w-4" />
                                        <span>Customers</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>Reviews</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <h1 className="text-2xl font-bold">
                                        Dashboard
                                    </h1>
                                    <Button className="bg-zinc-950 hover:bg-zinc-800 text-white">
                                        New Reservation
                                    </Button>
                                </div>

                                <Tabs
                                    value={activeTab}
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
                                                        <stat.icon className="h-4 w-4 text-gray-500" />
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
                                                        {reservations.length}{" "}
                                                        total reservations
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
                                                            {reservations.map(
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
                                                    {restaurants.map(
                                                        (restaurant) => (
                                                            <div
                                                                key={
                                                                    restaurant.id
                                                                }
                                                                className="flex items-center gap-4"
                                                            >
                                                                <img
                                                                    src={
                                                                        restaurant.image
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
                                                                    <div className="flex items-center text-sm text-gray-500">
                                                                        <Star className="mr-1 h-3 w-3 fill-amber-500 text-amber-500" />
                                                                        {
                                                                            restaurant.rating
                                                                        }{" "}
                                                                        ·{" "}
                                                                        {
                                                                            restaurant.cuisine
                                                                        }
                                                                    </div>
                                                                    <div className="text-xs text-gray-500">
                                                                        {
                                                                            restaurant.availableTables
                                                                        }{" "}
                                                                        tables
                                                                        available
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </TabsContent>

                                    {/* Note: These tabs don't need content as this is just a demo */}
                                    <TabsContent value="restaurants">
                                        <div className="p-8 text-center text-gray-500">
                                            Restaurant listing would appear here
                                            in the full dashboard
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="reservations">
                                        <div className="p-8 text-center text-gray-500">
                                            Reservation management would appear
                                            here in the full dashboard
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Customer Features */}
                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <CalendarCheck
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Easy Table Booking</CardTitle>
                            <CardDescription className="text-center">
                                Reserve your favorite table with just a few
                                clicks. View real-time availability and make
                                instant reservations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Book a Table
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <Utensils
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Convenient Menu Ordering</CardTitle>
                            <CardDescription className="text-center">
                                Browse menus, customize orders, and place
                                seamless takeout from your favorite restaurants.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Order Now
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <CreditCard
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Secure Payments</CardTitle>
                            <CardDescription className="text-center">
                                Experience hassle-free, secure transactions with
                                multiple payment options and advanced
                                encryption.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Payment Methods
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Owner Features */}
                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <MenuSquare
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Dynamic Menu Management</CardTitle>
                            <CardDescription className="text-center">
                                Easily update menus, add specials, manage
                                pricing, and showcase your culinary offerings in
                                real-time.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Manage Menu
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <Warehouse
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Inventory Tracking</CardTitle>
                            <CardDescription className="text-center">
                                Monitor stock levels, track ingredient usage,
                                and receive automated restocking alerts.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Track Inventory
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="flex flex-col items-center">
                        <CardHeader className="flex flex-col items-center">
                            <UserCheck
                                className="w-8 h-8 text-zinc-800 mb-4"
                                style={{ strokeWidth: 1.5 }}
                            />
                            <CardTitle>Staff Scheduling</CardTitle>
                            <CardDescription className="text-center">
                                Simplify workforce management with intuitive
                                scheduling, shift tracking, and performance
                                insights.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">
                                Manage Shifts
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
