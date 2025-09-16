<script setup>
import * as SolidIcons from '@heroicons/vue/24/solid'
import * as OutlineIcons from '@heroicons/vue/24/outline'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  solid: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
})

// 解析图标名称格式（假设格式为 heroicons:icon-name）
const parseIconName = (iconName) => {
  const parts = iconName.split(':')
  if (parts.length < 2) {
    return { library: '', name: iconName }
  }
  return {
    library: parts[0],
    name: parts[1]
  }
}

const getIcon = () => {
  const { library, name } = parseIconName(props.name)
  
  if (library !== 'heroicons') {
    console.warn(`不支持的图标库: ${library}`)
    return null
  }

  // 将短横线形式的名称转换为大驼峰形式
  const iconName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
  
  const icons = props.solid ? SolidIcons : OutlineIcons
  return icons[iconName + 'Icon']
}

const Icon = getIcon()
</script>

<template>
  <component v-if="Icon" :is="Icon" :class="class" />
  <span v-else :class="class">?</span>
</template>
