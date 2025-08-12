// Enhanced by AI on 2025-08-12T02:29:56.932Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Warehouse,
  BarChart,
  Truck,
  ShieldCheck
} from "lucide-react"
import Link from "next/link"

export default function About() {
  const values = [
    {
      icon: Warehouse,
      title: "Warehouse Excellence",
      description: "We're committed to optimizing warehouse operations through SAP EWM implementations that drive efficiency and accuracy."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge SAP technologies to solve complex logistics challenges and future-proof your supply chain."
    },
    {
      icon: Heart,
      title: "Client-Focused Approach",
      description: "Your business goals drive our implementation strategy. We tailor every SAP EWM solution to your specific operational needs."
    },
    {
      icon: ShieldCheck,
      title: "Reliable Expertise",
      description: "With certified SAP consultants and proven methodologies, we deliver consistent, high-quality implementations worldwide."
    }
  ]

  const stats = [
    { value: "2012", label: "Founded", icon: Award },
    { value: "200+", label: "Successful Projects", icon: Users },
    { value: "98%", label: "Client Retention", icon: TrendingUp },
    { value: "30+", label: "Countries Served", icon: Globe }
  ]

  const team = [
    {
      name: "Robert Schmidt",
      role: "CEO & Lead SAP Consultant",
      image: "RS",
      bio: "Former SAP AG logistics specialist. 18+ years implementing SAP EWM solutions."
    },
    {
      name: "Maria Chen",
      role: "CTO & SAP Technical Lead", 
      image: "MC",
      bio: "SAP certified architect with expertise in EWM-S/4HANA integration and warehouse automation."
    },
    {
      name: "Thomas Weber",
      role: "Head of Supply Chain Strategy",
      image: "TW",
      bio: "Supply chain optimization expert with background in global logistics operations."
    },
    {
      name: "Anita Patel",
      role: "Senior EWM Consultant",
      image: "AP",
      bio: "Specialized in complex warehouse processes and RF device integration for SAP EWM."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About LogisticsPro
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            SAP EWM Excellence for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Supply Chains
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a specialized team of SAP EWM consultants helping businesses transform their 
            warehouse operations with tailored, efficient, and future-ready solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2012 by a team of experienced SAP logistics consultants, LogisticsPro emerged from 
                a vision to simplify complex warehouse management implementations.
              </p>
              <p>
                After years of witnessing businesses struggle with inefficient warehouse processes and 
                costly implementation failures, we developed a streamlined methodology specifically for SAP EWM.
              </p>
              <p>
                Today, we're proud to have helped over 200 companies across 30 countries optimize their 
                warehouse operations, reduce costs, and achieve supply chain excellence through SAP EWM.
              </p>
            </div>
            <Link href="/services">
              <Button className="group">
                Explore Our Services
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe every warehouse deserves world-class management systems, regardless of size or complexity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Robert Schmidt, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our SAP EWM implementations and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Expert Team</h3>
            <p className="text-muted-foreground">
              Certified SAP consultants with decades of combined experience in warehouse management and logistics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="outline" className="group">
                Contact Our Team
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "LogisticsPro's SAP EWM implementation transformed our warehouse operations completely. 
                Order fulfillment time decreased by 40% and picking accuracy improved to 99.8%. Their expertise was invaluable."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Marcus Kreuzer</div>
                  <div className="text-sm text-muted-foreground">Logistics Director, Global Manufacturing Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}