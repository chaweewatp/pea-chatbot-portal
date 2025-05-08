import {
  ShoppingCartIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  CalendarIcon,
  GiftIcon,
  IdentificationIcon,
  HeartIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  ShieldExclamationIcon,
  CpuChipIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const chatbots = [
  {
    name: "ระเบียบและการเบิกสวัสดิการ",
    description: "สิทธิ์และขั้นตอนการเบิกสวัสดิการ",
    href: "/chatbots/welfare-regulation",
    icon: ClipboardDocumentCheckIcon,
    color: "bg-teal-100",
    enabled: true, // Disabled example
    category: "สวัสดิการ",
  },
  {
    name: "สวัสดิการเงินกู้",
    description: "เงื่อนไขและการขอรับสวัสดิการเงินกู้",
    href: "/chatbots/loan-benefits",
    icon: BanknotesIcon,
    color: "bg-amber-100",
    enabled: true, // Disabled example
    category: "สวัสดิการ",
  },
  {
    name: "งานจัดซื้อ",
    description: "ข้อมูลกระบวนการจัดซื้อและระเบียบที่เกี่ยวข้อง",
    href: "/chatbots/procurement",
    icon: ShoppingCartIcon,
    color: "bg-blue-100",
    enabled: false, // Disabled example
    category: "การจัดซื้อจัดจ้าง",
  },
  {
    name: "งานจัดจ้าง",
    description: "การจัดจ้างพนักงานและผู้ให้บริการภายนอก",
    href: "/chatbots/contracting",
    icon: DocumentTextIcon,
    color: "bg-green-100",
    enabled: false, // Disabled example
    category: "การจัดซื้อจัดจ้าง",
  },
  {
    name: "งานจัดเช่า",
    description: "ขั้นตอนการจัดเช่าสิ่งของและพื้นที่",
    href: "/chatbots/rental",
    icon: BuildingOfficeIcon,
    color: "bg-yellow-100",
    enabled: false, // Disabled example
    category: "การจัดซื้อจัดจ้าง",
  },
  {
    name: "ดูดวงตามราศี",
    description: "วิเคระห์ดวงชะตา ความรัก สุขภาพ หน้าที่การงาน",
    href: "/chatbots/zodiac-horoscope",
    icon: PhoneIcon,
    color: "bg-violet-50",
    enabled: true, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "ค้นหาข้อมูลมติที่ประชุม",
    description: "ค้นหาและสรุปมติจากการประชุม",
    href: "/chatbots/meeting-search",
    icon: MagnifyingGlassIcon,
    color: "bg-orange-100",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "งานมาตรฐานการก่อสร้างและขยายเขต",
    description: "มาตรฐานทางเทคนิคในการก่อสร้าง",
    href: "/chatbots/construction-standard",
    icon: WrenchScrewdriverIcon,
    color: "bg-red-100",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "AI วิเคราะห์พฤติกรรมลูกค้า",
    description: "วิเคราะห์แนวโน้มและพฤติกรรมของลูกค้า",
    href: "/chatbots/customer-behavior-ai",
    icon: ChartBarIcon,
    color: "bg-indigo-100",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "เลื่อนระดับ,ปรับต่ำแหน่ง,ปรับวุฒิ",
    description: "เลื่อนระดับ,ปรับต่ำแหน่ง,ปรับวุฒิ",
    href: "/chatbots/staff-promotion",
    icon: UserGroupIcon,
    color: "bg-purple-100",
    enabled: true, // Disabled example
    category: "พนักงาน",
  },
  {
    name: "AI วิเคราะห์สมรรถนะพนักงาน",
    description: "ประเมินอัตราการลาออกและทักษะ",
    href: "/chatbots/staff-analytics-ai",
    icon: AcademicCapIcon,
    color: "bg-pink-100",
    enabled: false, // Disabled example
    category: "พนักงาน",
  },

  {
    name: "งานโครงการเกษียณอายุ",
    description: "ข้อมูลโครงการเกษียณและสิทธิ์ที่เกี่ยวข้อง",
    href: "/chatbots/retirement-project",
    icon: CalendarIcon,
    color: "bg-lime-100",
    enabled: false, // Disabled example
    category: "พนักงาน",
  },
  {
    name: "งานของที่ระลึก",
    description: "ของขวัญหรือของที่ระลึกในโอกาสต่าง ๆ",
    href: "/chatbots/gifts",
    icon: GiftIcon,
    color: "bg-fuchsia-100",
    enabled: false, // Disabled example
    category: "พนักงาน",
  },
  {
    name: "งานเครื่องราช ฯ",
    description: "เสนอขอพระราชทานเครื่องราชอิสริยาภรณ์",
    href: "/chatbots/royal-decoration",
    icon: IdentificationIcon,
    color: "bg-rose-100",
    enabled: false, // Disabled example
    category: "พนักงาน",
  },
  {
    name: "Cremation ระบบฌาปนกิจสงเคราะห์",
    description: "ข้อมูลสิทธิ์และการใช้งานระบบฌาปนกิจ",
    href: "/chatbots/cremation",
    icon: HeartIcon,
    color: "bg-sky-100",
    enabled: false, // Disabled example
    category: "พนักงาน",
  },
  {
    name: "ถามตอบงานรับบริการรักษาพยาบาล",
    description: "ขั้นตอนการใช้สิทธิ์รักษาพยาบาล",
    href: "/chatbots/health-service",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-cyan-100",
    enabled: false, // Disabled example
    category: "สวัสดิการ",
  },
  {
    name: "ระบบเฝ้าระวังภัยคุกคามไซเบอร์",
    description: "แจ้งเตือนภัยไซเบอร์และแนวทางป้องกัน",
    href: "/chatbots/cyber-threats",
    icon: ShieldExclamationIcon,
    color: "bg-red-50",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "IT Automation",
    description: "ระบบอัตโนมัติในงาน IT",
    href: "/chatbots/it-automation",
    icon: CpuChipIcon,
    color: "bg-blue-50",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
  {
    name: "ระบบ Call Center อัจฉริยะ",
    description: "Call Center ขับเคลื่อนด้วย AI",
    href: "/chatbots/ai-callcenter",
    icon: PhoneIcon,
    color: "bg-violet-50",
    enabled: false, // Disabled example
    category: "อื่นๆ",
  },
];
