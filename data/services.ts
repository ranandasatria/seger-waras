import type { LucideIcon } from "lucide-react";
import { Layout, Bed, Sofa, CookingPot, Presentation, Grid3X3, PanelTop, Armchair, Building2, Image as ImageIcon } from "lucide-react";

export type ServiceItem = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  materials: string[];
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    id: "backdrop-ruang-tamu",
    name: "Backdrop Ruang Tamu",
    shortDescription: "Focal point elegan dengan material pilihan untuk ruang tamu impian.",
    description:
      "Backdrop ruang tamu merupakan elemen focal point yang menentukan karakter keseluruhan ruangan. Kami merancang dan memasang backdrop dengan material pilihan. Mulai dari wall panel berbagai motif, wallboard, hingga kombinasi HPL yang disesuaikan dengan gaya interior dan selera Anda.",
    benefits: [
      "Tersedia dalam berbagai gaya: Klasik, Modern minimalis, Tropis, Japan dan Skandinavian",
      "Memberikan sentuhan akhir yang elegan dan menaikkan nilai estetika properti Anda",
      "Desain dan warna yang dapat diselaraskan secara sempurna dengan furnitur utama",
    ],
    materials: ["Wall panel", "Wall board", "Moulding", "Plywood", "HPL", "Kombinasi pencahayaan"],
    icon: Layout,
  },
  {
    id: "backdrop-kamar-tidur",
    name: "Backdrop Kamar Tidur",
    shortDescription: "Kepala tempat tidur yang nyaman, elegan, dan personal.",
    description:
      "Backdrop di balik kepala tempat tidur menghadirkan kesan ruang yang lebih nyaman, elegan, dan personal. Kami membantu Anda memilih desain yang tepat dari yang simpel dan bersih hingga yang detail dan dekoratif, sesuai ukuran kamar dan kebutuhan.",
    benefits: [
      "Desain custom sesuai ukuran kamar",
      "Terintegrasi dengan hidden LED untuk menciptakan suasana tidur yang hangat",
      "Cocok untuk kamar utama maupun kamar anak",
    ],
    materials: ["Wall panel", "Wall board", "Moulding", "Kayu", "HPL", "Cermin", "Kombinasi pencahayaan"],
    icon: Bed,
  },
  {
    id: "interior-ruang-keluarga",
    name: "Interior Ruang Keluarga",
    shortDescription: "Ruang keluarga fungsional dengan penataan menyeluruh.",
    description:
      "Ruang keluarga adalah jantung dari sebuah rumah. Tempat berkumpul, beristirahat, dan berinteraksi. Kami menata dan memasang elemen interior ruang keluarga secara menyeluruh: dari unit TV, rak display, partisi, hingga penataan furnitur yang menciptakan suasana nyaman, hangat, dan fungsional.",
    benefits: [
      "Material kokoh dan tahan lama",
      "Kabel-kabel tersembunyi dengan rapi (No more cable mess!)",
      "Rak display dan storage terintegrasi",
    ],
    materials: ["Plywood", "HPL", "Kombinasi WPC", "Kombinasi pencahayaan"],
    icon: Sofa,
  },
  {
    id: "kitchen-set",
    name: "Kitchen Set",
    shortDescription: "Dapur custom yang memaksimalkan estetika dan fungsionalitas.",
    description:
      "Dapur yang tertata baik bukan hanya soal estetika, melainkan soal efisiensi dan kenyamanan memasak sehari-hari. Kami merancang dan memasang kitchen set custom yang memaksimalkan setiap sudut ruang dapur Anda, dengan material yang tahan terhadap panas, lembab, dan penggunaan intensif.",
    benefits: [
      "Kitchen set custom: upper cabinet, lower cabinet, dan mini bar",
      "Termasuk pemasangan backsplash dan top table",
      "Desain ergonomis yang memaksimalkan sirkulasi dan efisiensi memasak",
    ],
    materials: ["Plywood", "HPL", "PVC", "Kombinasi pencahayaan"],
    icon: CookingPot,
  },
  {
    id: "interior-ruang-rapat",
    name: "Interior Ruang Rapat",
    shortDescription: "Ruang rapat representatif untuk profesionalisme institusi Anda.",
    description:
      "Ruang rapat yang representatif mencerminkan profesionalisme sebuah institusi. Kami menangani pemasangan interior ruang rapat secara menyeluruh. Mulai dari dinding panel, backdrop presentasi, plafon, hingga pencahayaan dengan standar kerapian dan ketepatan yang dibutuhkan lingkungan kerja formal.",
    benefits: [
      "Backdrop kombinasi, Molding, dan furnitur kustom",
      "Plafon dan pencahayaan terintegrasi",
      "Flooring dan finishing detail",
    ],
    materials: ["Plywood", "HPL", "Kombinasi pencahayaan", "Kombinasi WPC (opsional)"],
    icon: Presentation,
  },
  {
    id: "lantai-vinyl",
    name: "Lantai Vinyl / SPC",
    shortDescription: "Lantai estetis, tahan lama, dan mudah perawatan.",
    description:
      "Lantai vinyl adalah solusi finishing lantai yang estetis, tahan lama, dan mudah perawatannya. Tersedia dalam berbagai motif — kayu, batu, dan abstrak — lantai vinyl cocok untuk hunian modern maupun ruang komersial yang menginginkan tampilan premium dengan biaya yang lebih efisien.",
    benefits: [
      "Tahan air, anti gores, dan mudah dibersihkan",
      "Cocok untuk seluruh ruangan interior",
      "Memberikan sensasi pijakan yang hangat, empuk, dan nyaman",
      "Material anti rayap dan tidak merambat api",
    ],
    materials: ["Vinyl", "SPC", "Underlayment"],
    icon: Grid3X3,
  },
  {
    id: "plafon-pvc",
    name: "Plafon PVC",
    shortDescription: "Plafon modern, tahan lembab, dan mudah perawatan.",
    description:
      "Plafon PVC menawarkan tampilan bersih dan modern dengan keunggulan tahan terhadap kelembaban, rayap, dan perubahan cuaca. Sangat cocok untuk iklim tropis Indonesia. Kami mengerjakan pemasangan plafon PVC untuk seluruh area rumah maupun ruang komersial dengan hasil rapi dan presisi.",
    benefits: [
      "Pemasangan plafon PVC polos maupun motif",
      "Tahan lembab, tidak dimakan rayap, mudah dibersihkan",
      "Tersedia berbagai warna dan tekstur",
      "Cocok untuk seluruh ruangan termasuk kamar mandi dan dapur",
    ],
    materials: ["PVC panel", "Framing", "List plafon"],
    icon: PanelTop,
  },
  {
    id: "furniture-custom",
    name: "Furniture Custom",
    shortDescription: "Furniture presisi yang memaksimalkan setiap sudut ruangan.",
    description:
      "Furniture custom menawarkan solusi penataan ruang yang sempurna dengan keunggulan ukuran yang presisi, pemanfaatan sudut ruangan yang maksimal, serta desain yang mencerminkan karakter Anda. Kami mengerjakan pembuatan berbagai jenis furniture custom (wardrobe, meja rias, ranjang, dipan, hingga meja kerja) menggunakan material berkualitas.",
    benefits: [
      "Personalisasi desain sesuai gaya dan kebutuhan Anda",
      "Ukuran presisi dengan zero-waste space",
      "Bebas memilih material, warna, tekstur, hingga aksesori",
      "Cocok untuk semua area termasuk kamar tidur, ruang kerja, koridor, hingga komersial",
    ],
    materials: ["Plywood", "HPL", "Multiplek", "Finishing solid"],
    icon: Armchair,
  },
  {
    id: "desain-arsitektur",
    name: "Desain Arsitektur Bangunan",
    shortDescription: "Rancangan bangunan matang sebagai panduan konstruksi.",
    description:
      "Sebelum membangun, sebuah bangunan membutuhkan rancangan yang matang. Kami menyediakan layanan desain arsitektur bangunan residensial yang mencakup gambar denah, tampak, potongan, dan detail konstruksi sebagai panduan yang akurat bagi pelaksana di lapangan.",
    benefits: [
      "Gambar denah, tampak depan, samping, dan belakang",
      "Gambar potongan dan detail konstruksi",
      "Revisi desain hingga sesuai kebutuhan klien",
      "Output: file PDF dan DWG (AutoCAD)",
    ],
    materials: [],
    icon: Building2,
  },
  {
    id: "konsep-3d",
    name: "Konsep 3D & Rendering",
    shortDescription: "Visualisasi realistis sebelum pembangunan dimulai.",
    description:
      "Sebelum pemasangan dimulai, kami menghadirkan visualisasi 3D yang memperlihatkan tampilan akhir ruang Anda secara realistis. Dengan rendering berkualitas tinggi, Anda dapat melihat, menilai, dan menyetujui desain sebelum satu pun material dipasang. Menghindari perubahan yang memakan biaya di tengah pengerjaan.",
    benefits: [
      "Visualisasi 3D interior per ruangan",
      "Rendering realistis dengan pencahayaan dan material aktual",
      "Revisi konsep hingga sesuai ekspektasi klien",
      "Output: file gambar resolusi tinggi",
    ],
    materials: [],
    icon: ImageIcon,
  },
];
