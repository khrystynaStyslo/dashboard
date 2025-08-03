import { ReactNode } from 'react'
import { BlockData } from '@/entities/block'

export type BlockRootProps = {
  block: BlockData
  onDelete: (id: string) => void
  children: ReactNode
}

export type BlockHeaderProps = {
  children: ReactNode
}

export type BlockTitleProps = {
  title: string
}

export type BlockDeleteButtonProps = {
  block: BlockData
  onDelete: (id: string) => void
}

export type BlockContentProps = {
  children: ReactNode
}
