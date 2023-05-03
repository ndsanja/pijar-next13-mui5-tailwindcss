export interface Verified {
  isVerified: boolean;
  veerifiedStart?: Date;
  verifiedEnd?: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  avatar?: string;
  gender?: string;
  verified: Verified;
}

export interface Lembaga {
  id: string;
  name: string;
  owner: string[];
  admin: string[];
  divisi: string[];
  alias?: string;
  category: string[];
}

export interface Divisi {
  id: string;
  name: string;
  lembaga: string[];
  divisi: string[];
  admin: string[];
  materi: string[];
  alias?: string;
  category?: string[];
}

export interface Materi {
  id: string;
  name: string;
  divisi: string[];
  admin: string[];
  silabus: string[];
  modul: string[];
  siswa: string[];
  pengajar: string[];
  wali: string[];
  alias?: string;
  category?: string[];
}

export interface Silabus {
  id: string;
  title: string;
  content: string;
  owner: string[];
}

export interface Modul {
  id: string;
  title: string;
  owner: User[];
  grade: string[];
  category: string[];
}

export interface ModulContent {
  id: string;
  title: string;
  content: string;
  author: User[];
}
