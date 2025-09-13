import { Member, MembersData } from '@/types/member';
import membersData from '@/data/members.json';

export function getAllMembers(): Member[] {
  return (membersData as MembersData).members;
}

export function getMemberById(id: string): Member | undefined {
  return getAllMembers().find(member => member.id === id);
}

export function getMembersByCategory(category: string): Member[] {
  return getAllMembers().filter(member => member.category === category);
}

export function getMembersByRegion(region: string): Member[] {
  return getAllMembers().filter(member => member.address.region === region);
}

export function getFeaturedMembers(): Member[] {
  return getAllMembers().filter(member => member.featured === true);
}

export function searchMembers(query: string): Member[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllMembers().filter(member =>
    member.businessName.toLowerCase().includes(lowercaseQuery) ||
    member.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    member.longDescription.toLowerCase().includes(lowercaseQuery) ||
    member.services.some(service => service.toLowerCase().includes(lowercaseQuery))
  );
}

export function getUniqueCategories(): string[] {
  const categories = new Set(getAllMembers().map(member => member.category));
  return Array.from(categories).sort();
}

export function getUniqueRegions(): string[] {
  const regions = new Set(getAllMembers().map(member => member.address.region));
  return Array.from(regions).sort();
}

export function getUniqueServices(): string[] {
  const services = new Set<string>();
  getAllMembers().forEach(member => {
    member.services.forEach(service => services.add(service));
  });
  return Array.from(services).sort();
}